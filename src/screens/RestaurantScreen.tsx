import React, { useEffect } from 'react';
import { Image, Text, View, Dimensions, FlatList } from 'react-native';
import useRestaurant from '../hooks/useRestaurant';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Restaurant: { id: string };
};

type RestaurantScreenRouteProp = RouteProp<RootStackParamList, 'Restaurant'>;
type RestaurantScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Restaurant'>;

interface RestaurantScreenProps {
  route: RestaurantScreenRouteProp;
  navigation: RestaurantScreenNavigationProp;
}

const RestaurantScreen = ({ route, navigation }: RestaurantScreenProps) => {
  const { id } = route.params;
  const [result, searchRestaurant] = useRestaurant()
  const { data, loading, error } = result

  const dimensions = Dimensions.get('window')
  const imageWidth = dimensions.width
  const imageHeight = Math.round((dimensions.width * 9) / 16)

  useEffect(() => {
    searchRestaurant(id)
  }, [])

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>{error}</Text>

  return (
    <View>
      {data && (
        <FlatList
          data={data.photos}
          keyExtractor={(photo: string) => photo}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ height: imageHeight, width: imageWidth }}
            />
          )}
        />
      )}
    </View>
  )
}

export default RestaurantScreen

