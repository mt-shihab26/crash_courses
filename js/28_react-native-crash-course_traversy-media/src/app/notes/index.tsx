import type { TNote } from "@/types/models";

import { useState } from "react";

import { AddNoteModal } from "@/components/add-note-modal";
import { FlatList, Text, View } from "react-native";

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
            <AddNoteModal />
        </View>
    );
};

export default Notes;
