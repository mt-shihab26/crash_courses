const auth = firebase.auth();
const db = firebase.firestore();

const whenSignOut = document.getElementById("when-sign-out");
const whenSignIn = document.getElementById("when-sign-in");
const signInGoogle = document.getElementById("sign-in-google");
const signOutBtn = document.getElementById("sign-out-btn");
const userDetails = document.getElementById("user-details");
const createThing = document.getElementById("create-thing");
const thingsList = document.getElementById("things-list");

const googleProvider = new firebase.auth.GoogleAuthProvider();

signInGoogle.onclick = () => auth.signInWithPopup(googleProvider);

signOutBtn.onclick = () => auth.signOut();

let thingsRef;
let unsubscribe;

const createRandomThing = (thingsRef, user) => () => {
    console.log("Here");
    thingsRef.add({
        uid: user.uid,
        name: faker.commerce.productName(),
        createAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
};

auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user);
        whenSignIn.hidden = false;
        whenSignOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3><p>User ID: ${user.uid}</p>`;
        thingsRef = db.collection("things");
        createThing.onclick = createRandomThing(thingsRef, user);
        unsubscribe = thingsRef
            .where("uid", "==", user.uid)
            .orderBy("createAt")
            .onSnapshot(querySnapshot => {
                const items = querySnapshot.docs.map(doc => {
                    return `<li>${doc.data().name}</li>`;
                });
                console.log(items);
                thingsList.innerHTML = items.join("");
            });
    } else {
        whenSignIn.hidden = true;
        whenSignOut.hidden = false;
        userDetails.innerHTML = "";
        unsubscribe && unsubscribe();
    }
});
