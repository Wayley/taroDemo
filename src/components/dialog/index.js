import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'

class GoodsList extends Component {
  static propTypes = {
    list: PropTypes.array
  }

  static defaultProps = {
    list: []
  }

  gotoDetail = e => {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${e.currentTarget.dataset.id}`
    })
  }

  render() {
    const { list } = this.props

    return (
      <View className='dialog'>
        {list.length > 0 ? (
          <View className='dialog-list'>
            {list.map((item, index) => (
              <Text key={index}>
                {index}--{item}
              </Text>
            ))}
          </View>
        ) : (
          <Text>暂无数据</Text>
        )}
      </View>
    )
  }
}

export default GoodsList
