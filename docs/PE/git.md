# git

## 安装

1. yum 方式安装，此方法简单，并且会自动安装依赖的包，真是傻瓜式安装，而且会从源里安装最新的版本，不过不一定是 git 最新的

```powerShell
yum install git -y
```

2. 执行成功之后查看安装是否成功

```powershell
git --version
```

3. 卸载

```powershell
yum remove git -y
```

4. Git 常用命令速查手册，妈妈再也不用担心我不会 Git 了

| 分支机构                     |                                  |
| :--------------------------- | :------------------------------- |
| git branch                   | 列出所有本地分支机构。           |
| git branch -a                | 列出远程和本地分支。             |
| git checkout -b branch_name  | 创建一个本地分支并切换到该分支。 |
| git checkout branch_name     | 切换到现有分支。                 |
| git push origin branch_name  | 将分支推送到远程。               |
| git branch -m new_name       | 重命名当前分支。                 |
| git branch -d branch_name    | 删除本地分支。                   |
| git push origin :branch_name | 删除远程分支。                   |

| 日志                   |                                           |
| :--------------------- | :---------------------------------------- |
| git log --oneline      | 单行显示提交历史记录。                    |
| git log -2             | 显示最近 N 次提交的提交历史记录。         |
| git log -p -2          | 用 diff 显示最近 N 次提交的提交历史记录。 |
| git diff               | 在工作树中显示所有本地文件更改。          |
| git diff myfile        | 显示对文件所做的更改。                    |
| git blame myfile       | 显示谁更改了文件的内容和时间。            |
| git remote show origin | 显示远程分支及其到本地的映射。            |

| 删除                  |                              |
| :-------------------- | :--------------------------- |
| git clean -f          | 删除所有未跟踪的文件。       |
| git clean -df         | 删除所有未跟踪的文件和目录。 |
| git checkout -- .     | 撤消对所有文件的本地修改。   |
| git reset HEAD myfile | 取消暂存文件。               |

| 标签                                 |                            |
| :----------------------------------- | :------------------------- |
| git pull --tags                      | 获取远程标签。             |
| git checkout tag_name                | 切换到现有标签。           |
| it tag                               | 列出所有标签。             |
| git tag -a tag_name -m "tag message" | 创建一个新标签。           |
| git push --tags                      | 将所有标签推送到远程仓库。 |

| 暂存                                     |                                      |
| :--------------------------------------- | :----------------------------------- |
| git stash save "stash name" && git stash | 将更改保存到存储中。                 |
| git stash list                           | 列出所有藏匿处。                     |
| git stash pop                            | 应用一个存储并将其从存储列表中删除。 |

<ClientOnly>
  <global-reward-index />
</ClientOnly>
