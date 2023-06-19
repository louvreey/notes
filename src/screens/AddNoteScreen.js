import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import realm from '../../store/realm';
import {HeaderComponent, MainComponent} from '../components/NoteComponent';

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
          id: dataLength == 0 ? 1 : lastIdfromrealm + 1,
          note: newNote,
          date: new Date().toISOString(),
        });
      });
      alert('Successfully save your note!');

      const data = realm.objects('Note');
      console.log(data);
    } else {
      alert('Empty note!');
    }
  };
  const getCurrentDate = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const noteDate = new Date();
    const dateOnly = noteDate.getDate();
    const monthOnly = noteDate.getMonth();
    const yearOnly = noteDate.getFullYear();

    return months[monthOnly] + '' + dateOnly + ',' + yearOnly;
  };

  return (
    <View style={styles.mainContainer}>
      <HeaderComponent title="create" onPress={() => saveNote(tempNote)} />
      <MainComponent date= {getCurrentDate()} onChangeText={(text) => setTempNote(text)} />
    </View>
  );
};

export default AddNoteScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  
});
