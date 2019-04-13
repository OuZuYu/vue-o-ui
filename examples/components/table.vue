<template>
  <table>
    <thead>
      <tr>
        <th v-for="key in columns">
          {{key}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in data">
        <td v-for="key in columns">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    props: {
        data: Array,
        columns: Array
    }
}
</script>

<style lang="scss" scoped>
table {
  border: 2px solid #dcdfe6;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #f9f9f9;
  color: #000;
  font-weight: bold;
  text-align: left;
  user-select: none;
}

td {
  border-bottom: 1px solid #dcdfe6;
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}
</style>
