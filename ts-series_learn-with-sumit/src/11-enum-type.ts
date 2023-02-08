enum ResType { SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN };

interface APIResponse2<T> {
    status: number,
    type: ResType,
    data: T;
}

const response1: APIResponse2<string> = {
    status: 200,
    type: ResType.SUCCESS,
    data: "test",
}

console.log(response1);