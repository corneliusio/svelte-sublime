from YAMLMacros.lib.syntax import rule
from YAMLMacros.lib.extend import *

def word(str):
    return r'(?i)\b{0}\b'.format(str)

def script_language(match, embed, file = 0):
    return embed_language_in_tag('script', match, embed, file)

def style_language(match, embed, file = 0):
    return embed_language_in_tag('style', match, embed, file)

def embed_language_in_tag(tag, match, embed, file):
    return rule(
        match=r'(?i)(?=text/{0}(?!{{unquoted_attribute_value}})|\'text/{0}\'|"text/{0}")'.format(match),
        set=[
            [
                rule(meta_content_scope='meta.tag.%s.begin.html' % tag),
                rule(include='%s-common' % tag),
                rule(
                    match='>',
                    scope='punctuation.definition.tag.end.html',
                    set=[
                        rule(include='%s-close-tag' % tag),
                        rule(
                            match=r'',
                            embed=(file if file else 'scope:%s' % embed),
                            embed_scope=('%s.embedded.html' % embed),
                            escape=r'(?i)(?=(?:-->\s*)?</%s)' % tag,
                        )
                    ]
                ),
            ],
            'tag-generic-attribute-meta',
            'tag-generic-attribute-value',
        ]
    )
