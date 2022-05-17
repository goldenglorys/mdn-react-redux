import axios from "axios";
import React, { useEffect, useState } from "react";
const TRANSLATE_API_KEY = process.env.REACT_APP_TRANSLATE_API_KEY;

const Convert = ({ language, text }) => {
  const [translated, setTreanslated] = useState("");
  const [debouncedText, setDebouncedTerm] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(text);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: TRANSLATE_API_KEY,
          },
        }
      );
      setTreanslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
