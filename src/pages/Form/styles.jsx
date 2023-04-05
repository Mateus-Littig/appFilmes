import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191A30',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    width: '90%',
    height: 42,
    backgroundColor: '#bbbaba',
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    fontSize: 15
  },
  labelError: {
    width: '100%',
    color: '#ff375b',
    marginBottom: 8,
    alignItems: 'flex-start',
    marginLeft: 50
  },
  boxBtn: {
    marginTop: '5%',
    backgroundColor: '#399FFF',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  btnCadastro: {
    height: 40,
    backgroundColor: '#7b44#2f5',
    borderRadius: 20,
    justifyContent: 'center'
  },
  textBtn: {
    color: 'white',
    textAlign: 'center'
  }
})
