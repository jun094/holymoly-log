/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const MarkdownIt = require('markdown-it');

const DIRECTORY = './contents';

function convertMarkdownToJson(file) {
  const markdown = fs.readFileSync(path.resolve(`${DIRECTORY}/${file}`), 'utf-8');

  // YAML Front Matter와 Markdown 본문을 분리합니다.
  const [frontmatterString, markdownString] = markdown.split('---\n').slice(1);

  // YAML Front Matter를 객체로 변환합니다.
  const frontmatter = yaml.load(frontmatterString);

  // Markdown을 HTML로 변환합니다.
  const md = new MarkdownIt();
  const html = md.render(markdownString);

  // 필요한 정보를 추출하여 JSON 객체로 반환합니다.
  return {
    date: frontmatter.date,
    title: frontmatter.title,
    categories: frontmatter.categories,
    summary: frontmatter.summary,
    thumbnail: frontmatter.thumbnail,
    content: html,
  };
}

const contentsToArray = string => {
  const arr = string.split('\n');

  return arr;
};

function getAllContents() {
  const files = fs.readdirSync(path.resolve(DIRECTORY));
  const data = files.map(file => convertMarkdownToJson(file));

  return data;
}

module.exports = {
  convertMarkdownToJson,
  contentsToArray,
  getAllContents,
};
