import { MetaTags } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticleCell'

interface Props {
  id: number
}

const ArticlePage = ({id}: Props) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />
      <p>
        <ArticleCell id={id}/>
      </p>
    </>
  )
}

export default ArticlePage
