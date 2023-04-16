


function LogSingle({log, index}) {

  console.log(index)
  return (
    <div className="Log">
      <li>
      <a href={`/logs/${index}`}>{log.title}</a>
      </li>
    </div>
  )
}

export default LogSingle
