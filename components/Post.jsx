import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  margin-top: 30px;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImg = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostDetails = styled.Text`
flex: 1
  flex-direction: column;
  justify-content: center;
`;

const PostTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0,0,0,0.4);
  margin-top: 2px;
`

/* const truncateTitle = (str) => {
    let arr = str.split();
    if (arr.length > 50) {
        let res = arr.slice(50).join()
      return res + '...';
    }
  
    return str;
  }; */

export const Post = ({title, imageUrl, createdAt }) => {
  return (
    
      <PostView>
        <PostImg 
        source={{uri: imageUrl}}
        />
        <PostDetails>
          <PostTitle> {title}</PostTitle>
          <PostDate> {new Date(createdAt).toLocaleDateString()}</PostDate>
        </PostDetails>
      </PostView>
  );
}