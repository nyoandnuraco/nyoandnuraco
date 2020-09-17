import React from "react";
import tableStyles from './tableStyles.module.css';
const DatePicker = () => {
  return (
    <table>
      <tr>
        <th>September  <i class='fas fa-angle-left'></i> </th>
        <th className={tableStyles.previousArrow}>  </th>

      </tr>
      <tr>
        <td>Sun</td>
        <td>Mon   </td>
        <td>Tues   </td>
        <td>Wed   </td>
        <td>Thurs   </td>
        <td>Fri  </td>
        <td>Sat   </td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
      </tr>
      <script src="https://kit.fontawesome.com/"></script>
    </table>
  );
};
export default DatePicker;
