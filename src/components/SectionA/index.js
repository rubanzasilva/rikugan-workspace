import React from 'react'
import { Img, ImgWrap, SectionAContainer, SectionAContent, ColumnLeft, ColumnRight, SectionAText, SectionATitle } from './sectionAElements'

const SectionA = ({img, alt, headline, headline1,titleA,reverse}) => {
  return (
    <SectionAContainer>

        <ColumnLeft id='section-A-item-one' reverse={reverse}>

          <SectionAContent id='section A content one'>

            {/* refactor text to be antd styled components  */}
            <SectionATitle id='section A Title One'> {titleA} </SectionATitle>
            <SectionAText id='section A Text One'> 
            {headline}
            {headline1}
            </SectionAText>

          </SectionAContent>

        </ColumnLeft>



        <ColumnRight id='section A item two' reverse={reverse}>

          <SectionAContent id='section A content two'>

            <SectionATitle id='section A Title two'></SectionATitle>
            <SectionAText id='section A Text two'></SectionAText>
            <ImgWrap>
              <Img src={img} alt={alt}/>
            </ImgWrap>

          </SectionAContent>

        </ColumnRight>

    </SectionAContainer>
  )
}

export default SectionA