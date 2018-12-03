import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import { classNames } from '../../utils/index'

import './index.scss'

class Mask extends Component {
  static propTypes = {
    transparent: PropTypes.bool,
    show: PropTypes.bool,
    opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }

  static defaultProps = {
    transparent: false,
    show: false,
    opacity: 0.6
  }

  render() {
    const { transparent, show, className, opacity } = this.props
    const cl = classNames(
      {
        mask: !transparent,
        mask_transparent: transparent
      },
      className
    )
    return (
      <View
        style={{ display: show ? 'block' : 'none', opacity: opacity }}
        className={cl}
      />
    )
  }
}

export default Mask
