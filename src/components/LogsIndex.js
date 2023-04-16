import { useState, useEffect } from "react";
import LogSingle from "./LogSingle";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
console.log(API);

function LogsIndex() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // make api call to get all logs
    const fetchLogs = async () => {
      try {
        const res = await axios.get(`${API}/logs`);
        // console.log(res.data);
        setLogs(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLogs();
  }, []);

  return (
    <div>
      <ul>
        {logs.map((log, index) => {
          return <LogSingle key={log.title} log={log} index={index}/>;
        })}
      </ul>
    </div>
  );
}

export default LogsIndex;
