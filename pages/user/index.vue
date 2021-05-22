<script>
export default {
  middleware: ({ redirect }) => {
    redirect('/user/overview')
  },
  middleware: 'auth',
}
</script>