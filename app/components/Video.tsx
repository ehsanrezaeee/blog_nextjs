type Props = {
  id: string;
};

export default function Video({ id }: Props) {
  return (
    <div className="h_iframe-aparat_embed_frame">
      <span className="display: block;padding-top: 57%"></span>
      <iframe
        src={`https://www.aparat.com/video/video/embed/videohash/${id}/vt/frame`}
      ></iframe>
    </div>
  );
}
