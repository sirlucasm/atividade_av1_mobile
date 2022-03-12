import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import CustomText from "../components/CustomText";

interface Item {
  name: string;
  price: string;
  date: string;
}

const Home = () => {
  const actionBtns: Array<string> = [
    'flight',
    'home',
    'local-dining',
    'directions-car',
    'build'
  ];
  const items: Array<Item> = [
    {
      name: 'Pizza',
      price: '30',
      date: '20/01/2020',
    },
    {
      name: 'Coca-Cola',
      price: '10',
      date: '20/01/2020',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText as="h1">Bem vindo, Carlos</CustomText>
        <View>
          <CustomText as="p">Você gastou hoje</CustomText>
          <CustomText as="h1">R$ 500</CustomText>
        </View>
        <View>
          <CustomText style={{ textTransform: 'uppercase' }} as="p">Escolher período:</CustomText>
          <View style={styles.choosePeriod}>
            <TouchableOpacity>
              <CustomText as="span">
                Hoje
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity>
              <CustomText as="span">
                Essa Semana
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity>
              <CustomText as="span">
                Esse Mês
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.actionArea}>
          {
            actionBtns.map((data: string, index) => (
              <Button
                key={index}
                buttonStyle={styles.actionBtn}
                icon={{ name: data, color: '#fff', size: 26, }}
              />
            ))
          }
        </View>
        <ScrollView>
          <View style={styles.listItems}>
            {
              items.map((data: Item, index) => (
                <TouchableOpacity key={index} style={styles.items}>
                  <CustomText as="p" color="#000">{data.name} (R$ {data.price})</CustomText>
                  <CustomText as="p" color="#000">{data.date}</CustomText>
                </TouchableOpacity>
              ))
            }
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F7EBE8',
  },
  header: {
    justifyContent: 'space-around',
    backgroundColor: '#E54B4B',
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    width: '100%',
    height: 350,
    textAlign: 'center'
  },
  choosePeriod: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10
  },
  content: {
    paddingVertical: 20,
  },
  actionArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionBtn: {
    outline: 'none',
    border: 'none',
    borderRadius: 5,
    width: 58,
    backgroundColor: '#444140',
    marginHorizontal: 6,
  },
  listItems: {
    padding: 5,
  },
  items: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 14,
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
