import React from "react";
import { ActivityIndicator, Text } from "react-native";
import { Modal, View } from "react-native-ui-lib";
import { useSelector } from "react-redux";
import { ILoadingSlice } from "@/core/slices/loadingSlice";

export const Loading = () => {
  const { loading: loadingGlobal, text } = useSelector(
    ({ loading }: { loading: ILoadingSlice }) => loading,
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={loadingGlobal}
      onRequestClose={() => null}
    >
      <View flex-1 center backgroundColor="rgba(0, 0, 0, 0.5)">
        <ActivityIndicator color="white" size={48} />
        <Text>{text}</Text>
      </View>
    </Modal>
  );
};
