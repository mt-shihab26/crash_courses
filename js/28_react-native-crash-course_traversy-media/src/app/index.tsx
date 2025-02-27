import { postIt } from "@/lib/images";
import { useRouter } from "expo-router";

import { Image, Text, TouchableOpacity, View } from "react-native";

const Index = () => {
    const router = useRouter();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                backgroundColor: "#f8f9fa",
            }}
        >
            <Image
                source={postIt}
                style={{
                    width: 100,
                    height: 100,
                    marginBottom: 20,
                    borderRadius: 10,
                }}
            />
            <Text
                style={{
                    fontSize: 28,
                    fontWeight: "bold",
                    marginBottom: 10,
                    color: "#333333",
                }}
            >
                Welcome to Notes App
            </Text>
            <Text
                style={{
                    fontSize: 16,
                    textAlign: "center",
                    marginBottom: 20,
                    color: "#666666",
                }}
            >
                Capture your thoughts anytime anywhere
            </Text>
            <TouchableOpacity
                style={{
                    backgroundColor: "#007bff",
                    paddingVertical: 12,
                    paddingHorizontal: 25,
                    borderRadius: 8,
                    alignItems: "center",
                }}
                onPress={() => router.push("/notes")}
            >
                <Text
                    style={{
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "bold",
                    }}
                >
                    Get Started
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Index;
