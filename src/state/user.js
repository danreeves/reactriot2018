import { Container } from 'unstated'

export default class User extends Container {
    state = {
        username: '',
        isRobot: false,
        isLoggedIn: false,
    }

    setUsername(value) {
        this.setState({ username: value })
    }

    setIsRobot(value) {
        this.setState({ isRobot: value })
    }

    setIsLoggedIn(value) {
        this.setState({ isLoggedIn: value })
    }
}