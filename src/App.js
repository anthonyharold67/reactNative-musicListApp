import {View, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import musicData from './helper/music-data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [filterData, setFilterData] = useState(musicData);

  const renderSong = ({item}) => <SongCard music={item} />;

  const renderSeperator = () => <View style={styles.seperator} />;

  const handleSearch = text => {
    setSearchText(text.toLowerCase());
  };

  useEffect(() => {
    setFilterData(
      musicData.filter(item => item.title.toLowerCase().includes(searchText)),
    );
  }, [searchText]);

  return (
    <View style={styles.container}>
      <SearchBar handleSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={filterData}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
