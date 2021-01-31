import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'

const Timeline = () => {
    return <div>
        <style jsx>{`
        div {
        background-color: #E3E3E3;
          display: flex;
          margin-left: auto;
          margin-right: auto;
          font-family: sans-serif, sans;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2021年1月31日"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<img src="https://img.icons8.com/nolan/64/boot-open--v2.png" />}
            >
                <a src="https://bestgo.abser.top"><h3 className="vertical-timeline-element-title">BestofGo</h3></a>
                <h4 className="vertical-timeline-element-subtitle">Abserari</h4>

                <p>一个收集 Go 项目跟踪热度的网站 </p>
                <iframe runat="server" transform='scale(0.55);' frameborder="no" a
                    llowtransparency="yes" scrolling="yes"
                    height='400px' width='100%'
                    src="https://bestgo.abser.top"></iframe>

            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2021年1月31日"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<img src="https://img.icons8.com/nolan/64/boot-open--v2.png" />}
            >
                <a src="https://github.com/silverswords/pulse"><h3 className="vertical-timeline-element-title">Pulse</h3></a>
                <h4 className="vertical-timeline-element-subtitle">Abserari</h4>

                <p>基于云的事件总线框架, Go 编写 </p>

            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2021年1月31日"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<img src="https://img.icons8.com/nolan/64/boot-open--v2.png" />}
            >
                <a src="https://yuque.com/abser"><h3 className="vertical-timeline-element-title">语雀</h3></a>
                <h4 className="vertical-timeline-element-subtitle">Abserari</h4>

                <p>我的博客 </p>

                <iframe runat="server" transform='scale(0.55);' frameborder="no" a
                    llowtransparency="yes" scrolling="yes"
                    height='400px' width='100%'
                    src="https://yuque.com/abser"></iframe>
            </VerticalTimelineElement>

        </VerticalTimeline>
    </div>
}

export default Timeline
