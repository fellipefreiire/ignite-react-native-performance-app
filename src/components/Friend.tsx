import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import lodash from 'lodash'

interface Props {
  data: {
    id: number
    name: string
    likes: number
    online: string
  },
  unfollow: () => void
}

const FriendComponent: React.FC<Props> = ({ data, unfollow }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text>
        {data.name} - Likes: {data.likes}
      </Text>

      <TouchableOpacity onPress={unfollow}>
        <Text>Deixar de seguir</Text>
      </TouchableOpacity>

      <Text>
        Online em: {data.online}
      </Text>
    </View>
  );
}

export const Friend = memo(FriendComponent, (prev, next) => {
  return lodash.isEqual(prev.data, next.data)
})