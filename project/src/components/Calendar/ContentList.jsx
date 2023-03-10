import React from 'react';
import { useSelector } from 'react-redux';

function ContentList() {
  // useSelector 로 filllife에 있는 inputData 값을 가져온다.
  const { inputData } = useSelector((state) => state.filllife);
  // useSelector 로 filllife 에 있는 lastId 값을 가져온다.
  const { TodayTime } = useSelector((state) => state.filllife);

  return (
    <div>
      <h2>나의 문화기록</h2>
      <div>
        <table className="listTable">
          <tbody>
            <tr>
              <td className="listTableIndex th">index</td>
              <td className="listTableTitle th">title</td>
            </tr>
            {lastId !== 0 ? ( // lastId 가 0이 아닐때만 목록을 보여준다.
              inputData.map(
                (rowData) =>
                  rowData.id !== '' && ( // rowData의 id 가 ''이 아닐때 목록을 보여준다.
                    <tr>
                      <td className="listTableIndex">{rowData.id}</td>
                      <td className="listTableTitle">{rowData.title}</td>
                    </tr>
                  )
              ) // 작성된 목록이 없을 때 보여줄 내용
            ) : (
              <tr>
                <td className="listTableIndex"></td>
                <td className="listTableTitle noData">작성된 글이 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContentList;
