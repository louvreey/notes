import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import {useState} from 'react';
import realm from '../../store/realm';

const AddNoteScreen = props => {
  const {navigation} = props;
  const [tempNote, setTempNote] = useState('');
  const saveNote = newNote => {
    const allData = realm.objects('Note');
    const dataLength = allData.length;
    let lastIdfromrealm = 0;

    if (dataLength !== 0) {
      lastIdfromrealm = allData[dataLength - 1].id;
    }

    if (newNote !== '') {
      realm.write(() => {
        realm.create('Note', {
          id: 1,
          note: newNote,
          date: new Date().toISOString(),
        });
      });
      alert('Successfully save your note!');
      console.log(allData)
      const data = realm.objects('Note');
    } else {
      alert('Empty note!');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Create</Text>
        <TouchableOpacity style={styles.button}>
          <Icon
            name="check"
            type="font-awesome-5"
            size={18}
            onPress={() => saveNote(tempNote)}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.date}>Date</Text>
      <TextInput
        multiline
        placeholder="Write here"
        style={styles.input}
        onChangeText={() => setTempNote(text)}
      />
    </View>
  );
};

export default AddNoteScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    padding: 8,
    backgroundColor: 'moccasin',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    padding: 8,
    fontWeight: 'bold',
  },
  button: {
    padding: 8,
  },
  date: {
    paddingTop: 16,
    paddingLeft: 16,
  },
  input: {
    fontSize: 16,
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16,
    textAlignVertical: 'top',
  },
});
