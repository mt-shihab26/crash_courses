import type { TNote } from "@/types/models";

import { useState } from "react";

import { FlatList, Text, TouchableOpacity, View } from "react-native";

const Notes = () => {
    const [notes, setNotes] = useState<TNote[]>([
        { id: "1", content: "Note One" },
        { id: "2", content: "Note Two" },
        { id: "3", content: "Note Three" },
    ]);

    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: "#ffffff" }}>
            <FlatList
                data={notes}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            backgroundColor: "#f5f5f5",
                            padding: 15,
                            borderRadius: 5,
                            marginVertical: 5,
                        }}
                    >
                        <Text style={{ fontSize: 18 }}>{item.content}</Text>
                    </View>
                )}
            />
            <TouchableOpacity
                style={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    right: 20,
                    backgroundColor: "#007bff",
                    padding: 15,
                    borderRadius: 8,
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "bold",
                    }}
                >
                    + Add Note
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Notes;
