export default function Page({ params }: { params: { id: string } }) {
  return <div>Blog Page: {params.id}</div>;
}
