import {SafeAreaView,ScrollView,StatusBar} from 'react-native'
import DataFetching from '../logic/DataFetching'

const MensaMoltke = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <StatusBar style="light" />
    <DataFetching url={"https://www.imensa.de/karlsruhe/mensa-moltke/index.html"}/>
    </ScrollView>
  </SafeAreaView>
  )
}

export default MensaMoltke

