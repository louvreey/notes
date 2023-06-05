import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import AddNoteScreen from './AddNoteScreen';

const NoteListScreen = props => {
  const {navigation} = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Notes</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => AddNoteScreen}>
          <Icon name="plus" type="antdesign" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoteListScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    padding: 8,
    backgroundColor: 'moccasin',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    padding: 8,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  addButton: {
    backgroundColor: 'pink',
    padding: 16,
    borderRadius: 100,
  },
});
