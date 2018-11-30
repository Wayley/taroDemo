import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Dialog from '../../components/dialog'

import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '个人中心'
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const products_list = ['你', '好']
    return (
      <View className='index'>
        <Text>my</Text>
        <Dialog list={products_list} />
      </View>
    )
  }
}
