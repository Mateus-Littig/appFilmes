import { StyleSheet } from 'react-native'

// export const Container = styled.View`

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191A30',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    color: '#f3eded',
    fontSize: 32,
    fontWeight: 'bold',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: 20
  },
  input: {
    width: '90%',
    height: 42,
    backgroundColor: '#bbbaba',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    fontSize: 15
  },
  forgotContainer: {
    width: '90%',
    alignItems: 'flex-end'
  },
  forgotText: {
    color: '#399FFF'
  },
  loginButton: {
    marginTop: '5%',
    backgroundColor: '#399FFF',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  loginText: {
    color: '#FFF',
    fontSize: 17
  },
  entrar: {
    fontSize: 20,
    color: '#FFf',
    marginTop: 16,
    fontWeight: 'bold'
  },
  buttonLogin: {
    flexDirection: 'row'
  },
  facebookButton: {
    alignItems: 'center',
    marginTop: '5%'
  },
  googleButton: {
    marginTop: 23,
    marginLeft: 25
  },
  divisor: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divisorLine: {
    width: '45%',
    height: 2,
    backgroundColor: 'white',
    borderRadius: 5
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: '10%'
  },
  signUpText: {
    color: '#C4C4C4',
    paddingRight: 5
  },
  signUpButton: {
    color: '#399FFF',
    fontWeight: 'bold'
  }
})
