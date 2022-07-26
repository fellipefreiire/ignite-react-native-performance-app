import React, { useCallback, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { FriendsList } from '../components/FriendsList';

interface Data {
  id: number
  name: string
  likes: number
}

export const Home: React.FC = () => {
  const [name, setName] = useState('')
  const [friends, setFriends] = useState([])

  const handleSearch = async () => {
    const response = await fetch(`http://192.168.0.70:3333/friends?q=${name}`)
    const data = await response.json()

    const formattedData = data.map((item: Data) => {
      return {
        ...item,
        online: `${new Date().getHours()}:${new Date().getMinutes()}`
      }
    })
    setFriends(formattedData)
  }

  const handleUnfollow = useCallback(() => {
    console.log('unfollow user')
  }, [])

  return (
    <View style={styles.container}>
      <Text>Amigos</Text>

      <TextInput
        style={styles.input}
        placeholder='Nome do cliente'
        onChangeText={setName}
      />

      <Button
        title='Buscar'
        onPress={handleSearch}
      />

      <FriendsList unfollow={handleUnfollow} data={friends} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginVertical: 10,
  },
  list: {
    marginTop: 20,
  }
})