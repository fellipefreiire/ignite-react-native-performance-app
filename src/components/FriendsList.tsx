import React, { useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Friend } from './Friend';

interface Props {
  data: {
    id: number
    name: string
    likes: number
    online: string
  }[]
  unfollow: () => void
}
export const FriendsList: React.FC<Props> = ({ data, unfollow }) => {
  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes + friend.likes
    }, 0)
  }, [data])

  return (
    <View>
      <Text>
        Total de likes: {totalLikes}
      </Text>
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Friend
            data={item}
            unfollow={unfollow}
          />
        )}
      />
    </View>
  );
}
