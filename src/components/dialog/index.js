import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import Mask from '../../components/mask'

import './index.scss'

class GoodsList extends Component {
  static propTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
    btns: PropTypes.array
  }

  static defaultProps = {
    show: false
  }

  gotoDetail = e => {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${e.currentTarget.dataset.id}`
    })
  }

  render() {
    const { show } = this.props
    return (
      <View>
        <Mask show={show} className='mmm' />
        <View className='dialog' style={{ display: show ? 'block' : 'none' }}>
          <View className='dialog-title'>这是标题</View>
          <View className='dialog-content'>内容</View>
          <View className='dialog-footer'>
            <View className='dialog-btn'>取消</View>
            <View className='dialog-btn'>取消</View>
          </View>
        </View>
      </View>
    )
  }
}

export default GoodsList
