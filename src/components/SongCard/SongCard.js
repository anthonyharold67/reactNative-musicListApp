import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './SongCard.styles';

const SongCard = ({music}) => {
  const {title, artist, year, imageUrl, isSoldOut, album} = music;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.body_container}>
          <View style={styles.info_container}>
            <Text>{artist}</Text>
            <Text style={styles.year}>{year}</Text>
          </View>
          {isSoldOut && (
            <View style={styles.soldout_container}>
              <Text style={styles.soldout_title}>TÜKENDİ</Text>
            </View>
          )}
        </View>
        <View style={styles.album_container}>
          <Text style={styles.album}>{album}</Text>
        </View>
      </View>
    </View>
  );
};

export default SongCard;
