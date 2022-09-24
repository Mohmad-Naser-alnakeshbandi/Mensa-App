import {SafeAreaView,ScrollView} from 'react-native'
import DataFetching from '../logic/DataFetching'

const MensaamAdenauerring = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <DataFetching url={"https://www.imensa.de/karlsruhe/mensa-am-adenauerring/index.html"}/>
    </ScrollView>
  </SafeAreaView>
  )
}

export default MensaamAdenauerring
