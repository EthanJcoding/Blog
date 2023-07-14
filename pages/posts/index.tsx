import { Layout } from "component/molecules/Layout/Layout";
import { Text } from "component/atoms/Text/Text";
import Figure from "component/atoms/Figure/Figure";

// 백엔드에서 데이터를 받고 하위 Posts View로 전달하기
export default function Posts() {
  return (
    <Layout>
      <div className="w-full h-full">
        <div className="w-full h-2 rounded bg-orange-300 mb-10"></div>
        <article className="w-full flex flex-col items-center">
          <Text size="title" font="semi_bold" className="my-4">
            Title
          </Text>
          <div className="text-md xl:text-lg xsm:text-md flex flex-col justify-evenly h-full">
            <div className="주제">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              facilisis lectus sit amet purus tincidunt ornare. Mauris sagittis
              sapien diam, a bibendum orci finibus at. In hac habitasse platea
              dictumst. Mauris dapibus nulla in felis suscipit dapibus. Integer
              eget enim vehicula, tincidunt mi non, cursus nulla. Morbi vitae
              semper ex, id mollis velit. Aenean nec metus turpis.
            </div>
            <div className="예시">
              Aliquam elementum nunc orci, nec rhoncus arcu sagittis sed.
              Curabitur in diam ut enim lacinia porta non eget urna. Vivamus
              placerat, ex eu mollis venenatis, odio tellus consectetur tortor,
              sed consectetur dui diam a arcu. Quisque cursus arcu in diam
              feugiat dictum. Ut malesuada ornare tincidunt. Aliquam volutpat
              ligula sit amet volutpat efficitur.
              <Figure
                image="https://velog.velcdn.com/images/wongue_shin/post/52e04cf0-4a0c-4378-8b48-9ca978df5d0a/image.gif"
                caption="example"
              />
              Integer volutpat nulla ut euismod elementum. Aliquam hendrerit
              semper augue, in dictum tortor tristique quis. Cras vitae urna
              accumsan, ullamcorper justo a, mattis tortor. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Aliquam tristique velit id tellus tincidunt
              vehicula. Integer leo eros, tristique a massa vel, volutpat
              lobortis ligula.
            </div>
            <div className="예시">
              Praesent ullamcorper ornare nunc eu lacinia. Cras in sapien est.
              Aenean dictum elit quis leo mattis, vel vehicula nulla venenatis.
              Mauris ullamcorper lacus nec magna sagittis ornare. Aenean nec
              metus turpis. Praesent ullamcorper ornare nunc eu lacinia. Cras in
              sapien est. Aenean dictum elit quis leo mattis, vel vehicula nulla
              venenatis. Mauris ullamcorper lacus nec magna sagittis ornare.
            </div>
            <div className="결론">
              Aenean nec metus turpis. Praesent ullamcorper ornare nunc eu
              lacinia. Cras in sapien est. Aenean dictum elit quis leo mattis,
              vel vehicula nulla venenatis. Mauris ullamcorper lacus nec magna
              sagittis ornare.
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
