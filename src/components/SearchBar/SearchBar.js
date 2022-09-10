import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = ({handleSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ara...."
        onChangeText={text => handleSearch(text)}
      />
    </View>
  );
};

export default SearchBar;
