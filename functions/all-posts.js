const { Client } = require('@notionhq/client')

function formatData(data) {
    return data.results.map(item => ({
        postId: item.id,
        title: item.properties?.Name?.title[0]?.plain_text,
        createdDate: item.properties?.Created?.created_time,
        tags: item.properties?.Tags?.multi_select?.map(({ id, name}) => ({ id, name}))
    }))
}


exports.handler = async function (event, context) {
    const client = new Client({
        auth: process.env.REACT_APP_NOTION_KEY
    });

    const data = await client.databases.query({
        database_id: process.env.REACT_APP_NOTION_DB
    });

    

    return {
      statusCode: 200,
      body: JSON.stringify(formatData(data)),
    };
}
  