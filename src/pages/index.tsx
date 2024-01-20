import { GetServerSideProps } from 'next'

export default function Index({text}: { text: string}) {
  return <div>{text} NextJs world!</div>
}

export const getServerSideProps: GetServerSideProps = async () => {

  return {
    props: {
      text: 'hi',
    },
  }
}
