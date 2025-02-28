import type { TNote } from "@/types/models";

import { FlatList, Text, View } from "react-native";

const NotesList = ({ notes }: { notes: TNote[] }) => {
    return (
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
    );
};

export { NotesList };
