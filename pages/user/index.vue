<script>
export default {
  middleware: ({ redirect }) => {
    redirect('/user/overview')
  },
  middleware: 'myauth',
}
</script>