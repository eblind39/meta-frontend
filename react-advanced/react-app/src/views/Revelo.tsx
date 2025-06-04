import { useState, createContext, useContext } from 'react';

const languages = ['JavaScript', 'Python', 'Haskel', 'Ruby', 'C#'];

const LanguageContext = createContext({
  index: 0,
  language: '',
  toggleLanguage: () => {}
});

interface LanguageProviderProps {
  children: React.ReactNode
}

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [index, setIndex] = useState(1);
  const [language, setLanguage] = useState(languages.length > 0 ? languages[0] : '');

  return (
    <LanguageContext.Provider
      value={{
        index,
        language,
        toggleLanguage: () => {
          setIndex(currVal => (languages.length > 0 ? (currVal + 1) % languages.length : 0));
          setLanguage(languages.length > 0 ? languages[index] : '');
        }
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguage = () => useContext(LanguageContext);

function MainSection() {
  const { language, toggleLanguage } = useLanguage();

  const favLangCSS = {
    color: 'lightcoral',
    fontWeight: 'bold',
    fontSize: '26px',
  }

  const toggleBtnCSS = {
    padding: '12px',
    width: '240px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: 'darkblue',
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }

  const containerCSS = {
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '2px',
  }

  return (
    <div className="divcontainer" style={containerCSS}>
      <p id="favoriteLanguage" style={favLangCSS}>Favorite programing language: <span style={{color: 'darkblue'}}>{language}</span></p>
      <button id="changeFavorite" style={toggleBtnCSS} onClick={toggleLanguage}>TOGGLE LANGUAGE</button>
    </div>
  )
}

const Revelo = () => {
  // implement Context here so can be used in child components
  return (
    <LanguageProvider>
      <MainSection />
    </LanguageProvider>
  );
}

export default Revelo;