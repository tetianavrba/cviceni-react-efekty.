import { useState, useEffect } from 'react';
/*
Zadání 1: Vytvořte v této komponentě stav `nacteno`, který bude mít výchozí hodnotu `false`.
  Dále vytvořte efekt, který po 3 vteřinách nastaví stav `nacteno` na `true`.
Zadání 2: Pomocí ternárního operátoru zobrazte text `Načítám…` nebo `Hotovo!` podle hodnoty
  ve stavu `nacteno`.
*/

export const Ukol4 = () => {
  const [nacteno, setNacteno] = useState(false);
  useEffect(() => {
    const zmenStav = () => {
      setNacteno(true);
    };
    setTimeout(zmenStav, 3000);
  }, []);
  console.log(nacteno);
  return (
    <>
      <p>Načítám…</p>
    </>
  );
};
