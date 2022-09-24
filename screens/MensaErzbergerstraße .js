import {SafeAreaView,ScrollView} from 'react-native'
import DataFetching from '../logic/DataFetching'

const MensaErzbergerstraße  = () => {
  return (
    <SafeAreaView>
    <ScrollView>
      <DataFetching url={"https://www.imensa.de/karlsruhe/mensa-erzbergerstrasse/index.html"}/>
    </ScrollView>
  </SafeAreaView>
  )
}

export default MensaErzbergerstraße 