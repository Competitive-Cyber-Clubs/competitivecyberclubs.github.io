# How to Contribute

Thanks for reading to look how to get started with contributing. We are a volunteer organization so we always looking for people to help contribute.

If you are unsure where to contribute, check out the [Projects page](https://github.com/Competitive-Cyber-Clubs/competitivecyberclubs.github.io/projects/1) OR send a message to administrators on the discord. 

Specifically, if you have resources for blue-teams/red-teams or organizers please add them aswell

## Building local environment

We use jekyll to build our website which is hosted with GitHub Pages. To build everything locally you need to have [Ruby](https://jekyllrb.com/docs/installation/) installed.  
After you have ruby install then you need to install the [bundler](https://jekyllrb.com/docs/ruby-101/#bundler) gem, then can clone the repo and build from there.

```bash
git clone https://github.com/Competitive-Cyber-Clubs/competitivecyberclubs.github.io.git ccc_website
cd ccc_website
bundle install
# Edit the code.
# Then to serve locally
bundle exec jekyll serve
```

then you will be able to browse to `localhost:4000` to view the site.

## Adding a resource

Adding a resource is done by editing the markdown page relavent to the resource category. You can find all the categories and markdown pages under the /all_collections/ folder. (https://github.com/Competitive-Cyber-Clubs/competitivecyberclubs.github.io/tree/master/all_collections)

Edit the relavent .md page, make a pull request


## Style Guide

Jekyll uses markdown for formatting of post and page creation. There is a [style guide](Style-Guide.md) that you can refer to when getting started. There are also numerous markdown cheatsheets available if you search for them.

## Contact

If you have any questions or concerns you can either contact us by email @ [cyberclubsusa@gmail.com](mailto:cyberclubuse@gmail.com) or preferably on discord.
