import Home from "../components/Home";
import { connect } from 'react-redux'
import { addCart, removeCart } from '../services/actions/action'

const mapStateToProps = (state) => ({
    data: state.cartItem
})

const mapDispatchProps = (dispatch) => ({
    addTOCartHandeler: (data) => dispatch(addCart(data)),
    removeTOCartHandeler: (data) => dispatch(removeCart(data))
})


export default connect(mapStateToProps, mapDispatchProps)(Home)


