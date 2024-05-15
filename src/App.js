import { useEffect, useState } from "react";

function App() {
  const url = "http://universities.hipolabs.com/search?country=India";
  const [details, setDetails] = useState([]);
  const fetchData = async () => {
    const response = await fetch(url);
    const data = response.json();
    setDetails(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {details.map((value) => (
        <table>
          <tr>
            <th>Country</th>
            <th>Web Pages</th>
            <th>Alpha Two Code</th>
            <th>State Province</th>
            <th>Domains</th>
            <th>Name</th>
          </tr>
          <tr>
            <td>{value.country}</td>
            <td>{value.web_pages[0]}</td>
            <td>{value.alpha_two_code}</td>
            <td>{value["state-province"]}</td>
            <td>{value.domains[0]}</td>
            <td>{value.name}</td>
          </tr>
        </table>
      ))}
    </div>
  );
}

export default App;
