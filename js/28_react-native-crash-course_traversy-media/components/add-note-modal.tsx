import { useState } from "react";

import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

const AddNoteModal = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [content, setContent] = useState<string>("");

    const addNote = () => {
        //
    };

    return (
        <View>
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
                onPress={() => setOpen(true)}
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
            <Modal
                visible={open}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setOpen(false)}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "#fff",
                            padding: 20,
                            borderRadius: 10,
                            width: "80%",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                marginBottom: 10,
                                textAlign: "center",
                            }}
                        >
                            Add a New Note
                        </Text>
                        <TextInput
                            placeholder="Enter note..."
                            placeholderTextColor="#aaaaaa"
                            value={content}
                            onChangeText={content => setContent(content)}
                            style={{
                                borderWidth: 1,
                                borderColor: "#cccccc",
                                borderRadius: 8,
                                padding: 10,
                                fontSize: 16,
                                marginBottom: 15,
                            }}
                        />
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#cccccc",
                                    padding: 10,
                                    borderRadius: 5,
                                    flex: 1,
                                    marginRight: 10,
                                    alignItems: "center",
                                }}
                                onPress={() => setOpen(false)}
                            >
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: "#333331",
                                    }}
                                >
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#007bff",
                                    padding: 10,
                                    borderRadius: 5,
                                    flex: 1,
                                    alignItems: "center",
                                }}
                                onPress={addNote}
                            >
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: "#ffffff",
                                    }}
                                >
                                    Save
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export { AddNoteModal };
